import { observer } from 'mobx-react-lite';

// не хук, а Higher Order Component)))
export function withObserver<T extends object>(Component: React.FC<T>): React.FC<T> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  return observer(Component) as React.FC<T>;
}