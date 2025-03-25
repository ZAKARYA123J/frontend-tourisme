import { useState,useEffect } from "react";

const Contact =()=> {

const [formData,setFormData]=useState({
  name :"",
  email:"",
  question:"",
  comment:"",
});

const [isVisible,setIsVisible]=useState(false);
const [successMessage,setSuccesMessage]=useState("");
const [loading,setLoading]=useState(false);

useEffect(()=>{
setTimeout(()=>setIsVisible(true),300);},
[]);

const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value});
};
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSuccesMessage("");

  try {
    const response = await fetch("http://127.0.0.1:8000/api/contacts", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.text();  
      console.log("Error response:", errorData); 
      setSuccesMessage('Error sending message. Please try again.');
    } else {
      const data = await response.json();  
      setSuccesMessage('Your message has been successfully sent!');
      setFormData({
        name: "",
        email: "",
        question: "",
        comment: "",
      });
    }
  } catch (error) {
    console.error("Error:", error);  
    setSuccesMessage("An error occurred. Please try again.");
  } finally {
    setLoading(false);
  }
};


return(
<div className="flex justify-center items-center min-h-screen bg-blue-300 relative ">
<div className="absolute inset-0 bg-black/50 "></div>
<div className={`relative bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full transition-all duration-700 ease-out transform${
  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
}`}>
<h2 className="text-3xl font-bold text-gray-900 text-center mb-4"> Contact Us</h2>
<p className={`text-gray-500 text-center mb-6 transition-opacity duration-700 ${isVisible ? "opacity-100":"opacity-0" } `}>
We would be delighted to hear from you! Fill out the form, and we will get back to you as soon as possible.
</p>
{successMessage && (
  <div className="text-center text-green-600 mb-4 font-bold">
    {successMessage}
  </div>
)}
<form className="space-y-4" onSubmit={handleSubmit}>
{["name","email","question"].map((field,index)=>(
  <div key={index}>
<label className="block text-gray-700 font-medium capitalize">{field}:</label>
<input  
type="text"
name={field}
value={formData[field]}
onChange={handleChange}
className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
placeholder={`Your ${field}...`}
/> 
 
 
  </div>
))}

<div>

<label className="block text-gray-700 font-medium capitalize">Comment:</label>
<textarea 
name="comment"
value={formData.comment}
onChange={handleChange}
className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
placeholder="Your comment..."

/>
</div>
<button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold 
shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
disabled={loading} >
{loading ? "sending..." : "SEND MESSAGE"}
</button>
</form>
</div>

</div>






)

};
export default Contact
