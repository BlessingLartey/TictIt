import { useState } from "react";
import BottomLink from "../atoms/BottomLinks/bottomLink";
import Button from "../atoms/Button/Button";
import Title from "../atoms/Title/title";
import Input from "../atoms/Input/Input";
import MainAppPageLayout from "../organisms/LandingLayout/MainAppPageLayout";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const update = (field, value) =>
    setForm({ ...form, [field]: value });

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if(response.ok){
        alert("Registration successful!");
        navigate("/home")
      }
      else{ alert(`Registration failed: ${data.msg}`);}
      
    } catch (error) {
      console.error("There's an error:", error);
      alert('An unexpected error occurred.');
    }
  };

  return (
    <MainAppPageLayout>
        <div className="flex flex-col gap-5 md:w-[380px]">
      <Title>Create Account</Title>

      <Input 
        label="Name"
        type="text"
        value={form.name}
        onChange={(e) => update("name", e.target.value)}
      />

      <Input 
        label="Email"
        type="email"
        value={form.email}
        onChange={(e) => update("email", e.target.value)}
      />

      <Input 
        label="Password"
        type="password"
        value={form.password}
        onChange={(e) => update("password", e.target.value)}
      />

      <Button onClick={handleRegister}>Register</Button>

      <BottomLink text="Already have an account? Login" to="/login" />
    </div>
    </MainAppPageLayout>
    
  );
}
