import './index.scss'

type Props<T> = {
  value: T;
  options: Option<T>[];
  setValue: (value: T) => void;
}

export type Option<T> = {
  className: string;
  value: T;
}

export const Radio = <T, >({
  options,
  value,
  setValue,
}: Props<T>) => (
  <div className="radio">
    {options.map((option) => (
      <button
        key={`${option.value}`}
        className={'radio-button ' + option.className + (value === option.value ? ' checked' : '')}
        onClick={() => setValue(option.value)}
      />
    ))}
  </div>
)
