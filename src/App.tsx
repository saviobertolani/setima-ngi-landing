import InteractiveDesktop from "./components/InteractiveDesktop";
import DesktopScaleContainer from "./components/motion/DesktopScaleContainer";

export default function App() {
  return (
    <DesktopScaleContainer>
      {({ scale }) => <InteractiveDesktop headerScale={scale} />}
    </DesktopScaleContainer>
  );
}