import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

export const createCheckoutSession = async (patientId: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/pay/checkout`,
      {
        patientId: parseInt(patientId),
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error creating checkout session:", error);
    throw error;
  }
};
