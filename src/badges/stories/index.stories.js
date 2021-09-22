import React from 'react'
import { storiesOf } from '@storybook/react'
import faker from 'faker'
import Box from 'ui-box'
import { Badge, Pill } from '..'
import { ThemeConsumer } from '../../theme'
import { Heading } from '../../typography'

const wrapperStyles = {
  display: 'flex',
  margin: 8
}

const baseStyles = {
  margin: 8,
  display: 'block'
}

const range = N => Array.from({ length: N }, (v, k) => k + 1)

faker.seed(7816)
const randomNumbers = range(8).map(() => {
  return faker.datatype.number({
    min: 1,
    max: 100
  })
})

storiesOf('badges', module)
  .add('Badge', () => (
    <ThemeConsumer>
      {theme => (
        <Box>
          <Heading marginBottom={8}>Default Appearance</Heading>
          <Box style={{ ...wrapperStyles }}>
            {Object.keys(theme.tokens.fills).map(color => (
                <Box key={color}>
                <Badge color={color} {...baseStyles}>
                {color}
              </Badge>
                </Box>
            ))}
          </Box>
          <Heading marginBottom={8}>Interactive</Heading>
          <Box style={{ ...wrapperStyles }}>
            {Object.keys(theme.tokens.fills).map(color => (
                <Box key={color}>
                <Badge color={color} {...baseStyles} isInteractive>
                {color}
              </Badge>
                </Box>
            ))}
          </Box>
          <Heading marginBottom={8}>Medium</Heading>
          <Box style={{ ...wrapperStyles }}>
            {Object.keys(theme.tokens.fills).map(color => (
              <Box key={color}>
                <Badge color={color} size='medium' {...baseStyles}>
                  {color}
                </Badge>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </ThemeConsumer>
  ))
  .add('Pill', () => (
    <ThemeConsumer>
      {theme => (
        <Box style={{ ...wrapperStyles }}>
          {Object.keys(theme.tokens.fills).map((color, index) => {
            return (
              <Box key={color} display="flex" flexDirection="column" alignItems="center">
                <Pill color={color} {...baseStyles}>
                  {randomNumbers[index]}
                </Pill>
              </Box>
            )
          })}
        </Box>
      )}
    </ThemeConsumer>
  ))
