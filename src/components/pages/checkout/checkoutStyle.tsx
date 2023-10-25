import { BoxProps } from '@chakra-ui/react'

// eslint-disable-next-line react-refresh/only-export-components
export const formLabelStyle: BoxProps = {
  color: 'black.200',
  fontWeight: 'bold',
  fontSize: '12px',
}

// eslint-disable-next-line react-refresh/only-export-components
export const formInputStyle: BoxProps = {
  width: { base: '280px' },
  height: { base: '56px' },
  bgColor: 'white.100',
  color: 'black.200',
  mb: { base: '25px' },
  borderColor: 'grey.200',
  fontFamily: 'main.100',
  fontSize: { base: '14px' },
  letterSpacing: '-0.25',
  fontWeight: 'bold',
}

export const FormLabelHeading: BoxProps = {
  color: 'orange.100',
  fontSize: '13px',
  lineHeight: '25px',
  letterSpacing: '1px',
  fontWeight: 'bold',
  mb: { base: '20px' },
  textTransform: 'uppercase',
}

export const SummaryItemHeading: BoxProps = {
  fontSize: { base: '15px' },
  fontFamily: 'main.100',
  fontWeight: 'bold',
  lineHeight: '25px',
}

export const SummaryItemPrice: BoxProps = {
  fontSize: '14px',
  lineHeight: '25px',
  fontWeight: 'bold',
  fontFamily: 'main.100',
  opacity: '0.5',
}

export const SummaryPricesText: BoxProps = {
  fontSize: '15px',
  lineHeight: '25px',
  fontWeight: 'medium',
  fontFamily: 'main.100',
  opacity: '0.5',
}

export const SummaryTotalPrices: BoxProps = {
  fontSize: { base: '18px' },
  fontFamily: 'main.100',
  fontWeight: 'bold',
  lineHeight: 'auto',
}
