import { useState, useContext } from 'react';
import { createStyles, NumberInput, ActionIcon, rem } from '@mantine/core';
import { IconPlus, IconMinus } from '@tabler/icons-react';
import { CartContext } from '../../../context/CartContext';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: `${rem(6)} ${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]
    }`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,

    '&:focus-within': {
      borderColor: theme.colors[theme.primaryColor][6],
    },
  },

  control: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]
    }`,

    '&:disabled': {
      borderColor: theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3],
      opacity: 0.8,
      backgroundColor: 'transparent',
    },
  },

  input: {
    textAlign: 'center',
    paddingRight: `${theme.spacing.sm} !important`,
    paddingLeft: `${theme.spacing.sm} !important`,
    height: rem(28)
  },
}));

export function CounterContainer({ max, handleQuantity }) {
  const { classes } = useStyles();
  const [value, setValue] = useState(1);

  const min = 1

  const add = () => {
    if (value < max) {
      handleQuantity(value + 1)
      setValue((previous) => previous + 1)
    }
  }

  const remove = () => {
    if (value > 1){
      handleQuantity(value - 1)
      setValue((previous) => previous - 1)
    }
  }

  return (
    <div className={classes.wrapper}>
      <ActionIcon
        size={28}
        variant="transparent"
        onClick={remove}
        disabled={value === min}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <IconMinus size="1rem" stroke={1.5} />
      </ActionIcon>

      <NumberInput
        variant="unstyled"
        min={min}
        max={max}
        value={value}
        onChange={setValue}
        classNames={{ input: classes.input }}
      />

      <ActionIcon
        size={28}
        variant="transparent"
        onClick={add}
        disabled={value === max}
        className={classes.control}
        onMouseDown={(event) => event.preventDefault()}
      >
        <IconPlus size="1rem" stroke={1.5} />
      </ActionIcon>
    </div>
  );
}