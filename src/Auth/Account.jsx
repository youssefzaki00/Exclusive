import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useUserData from "../hooks/useUserData";
import { supabase } from "../utils/supabase";
import RoadMap from "./../components/RoadMap";

function Account() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const { user, setUser } = useUserData();
  const navigate = useNavigate();

  useEffect(() => {
    setFirstName(user?.first_name);
    setLastName(user?.last_name);
    setEmail(user?.email);
    setAddress(user?.address);
  }, [user]);

  async function editProfile() {
    try {
      const validationErrors = []; // For collecting validation errors

      if (!firstName) {
        validationErrors.push("Please enter your first name.");
      }

      if (!lastName) {
        validationErrors.push("Please enter your last name.");
      }

      if (!address) {
        validationErrors.push("Please enter your address.");
      }

      if (!currentPassword) {
        validationErrors.push("Please enter your password.");
      }
      if (currentPassword && currentPassword !== user.password) {
        validationErrors.push("Incorrect current password ");
      }

      if (newPassword && newPassword !== confirmNewPassword) {
        validationErrors.push("New password and confirm password don't match.");
      }

      if (validationErrors.length > 0) {
        toast.error(validationErrors.join("\n")); // Display all errors
        return;
      }
      let updateData = {};
      if (newPassword && newPassword != "") {
        updateData = {
          email,
          password: newPassword,
          data: {
            email,
            first_name: firstName,
            last_name: lastName,
            address,
            password: newPassword ? newPassword : currentPassword,
          },
        };
      } else {
        updateData = {
          email,
          data: {
            email,
            first_name: firstName,
            last_name: lastName,
            address,
            password: newPassword ? newPassword : currentPassword,
          },
        };
      }

      const { error } = await supabase.auth.updateUser(updateData);
      if (error) {
        toast.error(error.message);
        console.error(error.message);
        return;
      }

      await supabase
        .from("clients")
        .update({
          ...user,
          first_name: firstName,
          last_name: lastName,
          address,
          password: newPassword ? newPassword : currentPassword,
          email,
        })
        .eq("id", user.id)
        .select();

      setUser({
        ...user,
        email,
        first_name: firstName,
        last_name: lastName,
        address,
      });
      navigate("/");
      toast.success("You edited your profile successfully");
      setNewPassword("");
      setConfirmNewPassword("");
    } catch (error) {
      toast.error(error.message);
      console.error("Unexpected error:", error);
    }
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
                disabled
                // onChange={(e) => setEmail(e.target.value)}
                value={email || ""}
                type="email"
                id="Email"
                name="Email"
                className="p-2 rounded bg-primary2 text-secondary2"
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
            <Link
              to="/"
              className="p-4 border rounded shadow active:shadow-inner hover:bg-slate-50"
            >
              Cancel
            </Link>
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
