//Display a switch (on/off)
//Let the user click it
//Notify the parent that something happened
import Switch from "react-switch";

function Toggle({ isActive, onToggle, id }) {
  return (
    <Switch
      checked={isActive}
      onChange={() => onToggle(id)}
      
      // COLORS
      onColor="#E74C3C"   // red (active)
      offColor="#4B5563"  // gray (inactive)

      // KNOB COLOR
      onHandleColor="#ffffff"
      offHandleColor="#ffffff"

      // ICONS (remove check/X)
      checkedIcon={false}
      uncheckedIcon={false}
    />
  );
}

export default Toggle;