import { useState } from "react";
import BottomLink from "../atoms/BottomLinks/bottomLink";
import Button from "../atoms/Button/Button";
import Title from "../atoms/Title/title";
import Input from "../atoms/Input/Input";
import MainAppPageLayout from "../organisms/LandingLayout/MainAppPageLayout";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const update = (field, value) =>
    setForm({ ...form, [field]: value });

  const handleLogin = async () =>{
    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if(response.ok){
        alert("Login successful!");
        window.location.href = "/home"
      } else {
        alert(`Login failed: ${data.msg}`);
      }
    } catch (error) {
      console.error('Error during Login:', error);
      alert('An unexpected error occured.')
    }
  }

  

  return (

    <MainAppPageLayout>
        <div className="flex flex-col gap-5 md:w-[380px]">
      <Title>Login</Title>

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

      <Button onClick={handleLogin}>Login</Button>

      <BottomLink text="Don’t have an account? Register" to="/register" />
    </div>
    </MainAppPageLayout>
    
  );
}
