import { UserType } from "@/types/userType";


export const loginService= async (formData:UserType) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };