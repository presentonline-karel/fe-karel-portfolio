export function renderButtonStyle(type: String) {
  switch (type) {
    case "button-primary":
      return "btn btn-primary styles/classes";
    case "button-secondary":
      return "btn btn-secondary styles/classes";
    default:
      return "btn btn-primary styles/classes";
  }
}