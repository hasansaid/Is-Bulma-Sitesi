import './style.css';
import Button from '../../Elements/Button';

export default function Subscribe() {
  return (
    <div className="subscribe__email">
      <p className="subscribe__email--text">
        Receive the latest
        <br />
        related ads by email.
      </p>
      <Button block type="solid">
        Subscribe
      </Button>
    </div>
  );
}
