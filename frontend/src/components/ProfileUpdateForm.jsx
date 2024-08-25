import {ProfileUpdateSchema} from "@/Schemas/ProfileUpdateSchema.js"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";


const ProfileUpdateForm = () => {

      const profileUpdateForm = useForm({
        resolver: zodResolver(ProfileUpdateSchema),
        defaultValues: {
          name: "Duraiz Haider",
          email:"Test@gmail.com",
          title:"Web Developer",
          city:"Lahore",
          bio:"Aspiring web dev",
          skills:["HTML","CSS","JS"]
        },
      });


      function

  return (
    <>
    
    </>
  )
};

export default ProfileUpdateForm;
