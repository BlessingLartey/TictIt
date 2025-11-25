import { useState } from "react";
import BottomLink from "../atoms/BottomLinks/bottomLink";
import Button from "../atoms/Button/Button";
import Title from "../atoms/Title/title";
import Input from "../atoms/Input/Input";
import MainAppPageLayout from "../organisms/LandingLayout/MainAppPageLayout";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const update = (field, value) =>
    setForm({ ...form, [field]: value });

  return (
    <MainAppPageLayout>
        <div className="flex flex-col gap-5 w-[380px]">
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

      <Button>Register</Button>

      <BottomLink text="Already have an account? Login" to="/login" />
    </div>
    </MainAppPageLayout>
    
  );
}
