import { useState, useCallback } from "react";
import { POST_HISTORY } from "../utils/Constants.js";

const useHistory = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const postHistory = async ({ firstOperand, secondOperand, operator, result }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(POST_HISTORY, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstOperand, secondOperand, operator, result }),
      });

      if (!response.ok) {
        throw new Error("Failed to post history");
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { postHistory, loading, error, success };
};

export default useHistory;
