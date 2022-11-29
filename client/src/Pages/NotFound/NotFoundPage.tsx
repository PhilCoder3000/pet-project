import { useTimer } from 'features/times/useTimer';
import { Button } from 'shared/buttons/Button';

function NotFoundPage() {
  const timeLeft = useTimer(5, () => console.log('asdf'));

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h3>Not Found</h3>
      <Button color="primary">To Main page</Button>
      <p>{timeLeft}</p>
    </div>
  );
}

export default NotFoundPage;
