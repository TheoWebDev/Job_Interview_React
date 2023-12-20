import { useState } from 'react';

type ButtonState = 'DEFAULT' | 'SELECTED' | 'WRONG';
type Option = {
  value: string,
  state: ButtonState
}

export default function CountriesCapital({ data }: { data: Record<string, string> }) {
  const countries = Object.keys(data);
  const capitals = Object.values(data);
  const [options, setOptions] = useState<Option[]>(
    [...countries, ...capitals]
    .sort(() => Math.random() - 0.5)
    .map((value) => ({
      value,
      state: 'DEFAULT'
    }))
  );

  const [selected, setSelected] = useState<Option>();
  const isGameOver = options.length === 0;

  if (isGameOver) {
    return <div>Congrats !</div>
  }

  return (
    <>
    <div className='container'>
    {options.map((option) => (
      <button
        className={option.state === 'SELECTED' ? 'btn selected' : option.state === 'WRONG' ? 'btn wrong' : 'btn' }
        key={option.value}
        onClick={() => {
          if (!selected) {
            setSelected(option)
            setOptions(
              options.map((opt) => {
                return opt === option
                  ? {
                      ...opt,
                      state: 'SELECTED',
                    }
                  : { ...opt, state: 'DEFAULT'};
              })
            );
          } else {
            if(selected.value === data[option.value] ||
              data[selected.value] === option.value
            ) {
              setOptions(
                options.filter((opt => {
                  return !(
                    opt.value === selected.value || opt.value === option.value
                  );
                }))
              );
            } else {
              // wrong pair
              setOptions(
                options.map((opt => {
                  return opt.value === selected.value ||
                    opt.value === option.value
                    ? {...opt, state: 'WRONG' }
                    : opt;
                }))
              );
            }
            setSelected(undefined);
          }
        }}>
          {option.value}
      </button>
    ))}
    </div>
    </>
  )
}
