import { Link } from "react-router-dom";
import RoadMap from "./../components/RoadMap";
import { useContext, useEffect, useState } from "react";
import { UserData } from "../context/UserData";
import { supabase } from "../utils/supabase";
import { toast } from "react-toastify";

function Account() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { user, setUser } = useContext(UserData);

  useEffect(() => {
    setFirstName(user.first_name);
    setLastName(user.last_name);
    setEmail(user.email);
    setAddress(user.address);
    setCurrentPassword(user.password);
  }, []);
  async function editProfile() {
    try {
      if (!firstName || firstName == "") {
        toast.error("please write Your firstName");
      } else if (!lastName || lastName == "") {
        toast.error("please write Your lastName");
      } else if (!email || email == "") {
        toast.error("please write Your email");
      } else if (!address || address == "") {
        toast.error("please write Your address");
      } else if (!currentPassword || currentPassword == "") {
        toast.error("please write Your Current Password");
      } else if (currentPassword != user.password) {
        toast.error("please write Your Current Password correctly");
      } else if (newPassword != confirmNewPassword) {
        toast.error("please confirm new password");
      } else {
        const { error } = await supabase.auth.updateUser({
          email: email,
          password: newPassword,
          data: {
            email: email,
            first_name: firstName,
            last_name: lastName,
            password: newPassword ? newPassword : currentPassword,
            address: address,
          },
        });
        await supabase
          .from("clients")
          .update({
            email: email,
            first_name: firstName,
            last_name: lastName,
            password: newPassword ? newPassword : currentPassword,
            address: address,
          })
          .eq("id", user.id)
          .select();
        setUser({
          ...user,
          email: email,
          first_name: firstName,
          last_name: lastName,
          password: newPassword ? newPassword : currentPassword,
          address: address,
        });
        if (error) {
          toast.error(error.message);
          console.error(error.message);
          return;
        }
      }
    } catch (error) {
      toast.error(error);
      console.error("Unexpected error fetching products:", error);
      return;
    }
    toast.success("You edited Your profile successfully");
    setFirstName("");
    setLastName("");
    setEmail("");
    setAddress("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  }
  return (
    <div className="CustomContainer mb-[140px]">
      <div className="flex flex-wrap items-center lg:justify-between max-lg:mb-20">
        <RoadMap />
        <p>
          Welcome! <span className="text-secondary3">{firstName}</span>
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-7">
        <div className="flex flex-col col-span-2 gap-6 text-text2">
          <h3 className="font-medium text-text3">Manage My Account</h3>
          <div className="flex flex-col gap-2 ml-9">
            <Link to="">My Profile</Link>
            <Link to="">Address Book</Link>
            <Link to="">My Payment Options</Link>
          </div>
          <h3 className="font-medium text-text3">My Orders</h3>
          <div className="flex flex-col gap-2 ml-9">
            <Link to="">My Returns</Link>
            <Link to="">My Cancellations</Link>
          </div>
          <h3 className="font-medium text-text3">WishList</h3>
        </div>
        <div className="flex flex-col col-span-5 gap-6 px-4 py-10 border shadow lg:px-20">
          <h2 className="text-xl font-medium text-secondary3">
            Edit Your Profile
          </h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstName">
                First Name <span className="text-secondary3"> *</span>
              </label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName || ""}
                type="text"
                id="firstName"
                name="firstName"
                className="p-2 rounded bg-secondary1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="lastName">
                Last Name <span className="text-secondary3"> *</span>
              </label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName || ""}
                type="text"
                id="lastName"
                name="lastName"
                className="p-2 rounded bg-secondary1"
              />
            </div>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="Email">
                Email <span className="text-secondary3"> *</span>
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email || ""}
                type="email"
                id="Email"
                name="Email"
                className="p-2 rounded bg-secondary1"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Address">
                Address <span className="text-secondary3"> *</span>
              </label>
              <input
                onChange={(e) => setAddress(e.target.value)}
                value={address || ""}
                type="text"
                id="Address"
                name="Address"
                className="p-2 rounded bg-secondary1"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <label htmlFor="Address">
              Password Changes <span className="text-secondary3"> *</span>
            </label>
            <input
              onChange={(e) => setCurrentPassword(e.target.value)}
              value={currentPassword || ""}
              type="text"
              id="currentPassword"
              name="currentPassword"
              placeholder="Current Password"
              className="p-2 rounded bg-secondary1"
            />
            <input
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword || ""}
              type="text"
              id="newPassword"
              name="newPassword"
              placeholder="New Password"
              className="p-2 rounded bg-secondary1"
            />
            <input
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              value={confirmNewPassword || ""}
              type="text"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirm Password"
              className="p-2 rounded bg-secondary1"
            />
          </div>
          <div className="flex flex-col justify-end gap-8 lg:flex-row">
            <button className="p-4 border rounded shadow active:shadow-inner hover:bg-slate-50">
              Cancel
            </button>
            <button
              onClick={editProfile}
              className="p-4 border-black rounded shadow hover:bg-buttonHover1 active:shadow-inner text-text1 bg-button2"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
