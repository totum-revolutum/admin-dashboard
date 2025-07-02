import { useState } from "react";
import Switch from "../components/ui/switch";
import Input from "../components/ui/input";
import Checkbox from "../components/ui/checkbox";
import Label from "../components/ui/label";
import Card from "../components/ui/card";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  return (
    <div className="flex justify-center px-4">
      <Card className="max-w-md w-full space-y-6 p-6 bg-[#1a1a1a] border border-[#2f2f2f] rounded-xl">
        <div className="flex items-center justify-between">
          <Label htmlFor="dark-mode">Dark Mode</Label>
          <Switch checked={darkMode} onChange={setDarkMode} />
        </div>

        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            checked={acceptTerms}
            onCheckedChange={setAcceptTerms}
          />
          <Label htmlFor="terms">I agree to the terms and conditions</Label>
        </div>
      </Card>
    </div>
  );
};

export default Settings;
