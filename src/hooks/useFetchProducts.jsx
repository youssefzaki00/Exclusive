import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase"; // Assuming supabase is initialized elsewhere
import { toast } from "react-toastify";

function useFetchProducts(name) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchAllData = async () => {
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
  const fetchProduct = async () => {
    try {
      setLoading(true);
      const { data, error: supabaseError } = await supabase
        .from("Products")
        .select("*")
        .eq("name", name);
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

  useEffect(() => {
    if (name) {
      fetchProduct();
    } else {
      fetchAllData();
    }
  }, []);

  return { products, loading, error };
}

export default useFetchProducts;
