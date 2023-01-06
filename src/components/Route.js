import useNavigation from "../hook/useNavigation";

function Route({ path, children }) {
  const { currentPath } = useNavigation();
  if (path === currentPath) {
    return children;
  }
  return null;
}

export default Route;
