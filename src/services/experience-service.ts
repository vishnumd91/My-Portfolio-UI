import axiosInstance from "../api/axiosConfig";

export const getExperienceData = async () => {
    try {        
        const { data } = await axiosInstance.get("/portfolio/experience");
        return data;
    } catch (error: unknown) {
        console.log(error);
    }
  };
