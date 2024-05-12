import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase"; // Assuming supabase is initialized elsewhere
import { toast } from "react-toastify";

function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data, error: supabaseError } = await supabase
          .from("Products")
          .select("*");
        if (supabaseError) {
          setError(supabaseError.message);
          console.error(supabaseError.message);
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.error(error.message);
        toast.error("An unexpected error occurred.");
        setError("An unexpected error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures fetching happens only once

  return { products, loading, error };
}

export default useFetchProducts;
