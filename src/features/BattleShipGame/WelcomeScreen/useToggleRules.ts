import { useState } from "react";

export interface RulesProps {
  openRules?: boolean;
  handleToggleRules?: () => void;
}

const useToggleRules = () => {
  const [openRules, setOpenRules] = useState(false);

  const handleToggleRules = () => setOpenRules(prev => !prev);
  return { openRules, handleToggleRules };
};

export default useToggleRules;
