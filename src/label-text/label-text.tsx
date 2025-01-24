import React, { FC, LabelHTMLAttributes } from 'react'
import { elLabelText } from './styles'

export interface LabelTextProps extends LabelHTMLAttributes<HTMLLabelElement> {
  variant?: 'soft' | 'strong'
  size?: 'small' | 'medium'
  legend?: 'label' | 'span' | 'text'
  isRequired?: boolean
}

export const LabelText: FC<LabelTextProps> = ({ children, isRequired, size = 'medium', variant = 'soft', legend = "label", className, ...rest }) => {
  const ElLabelText = elLabelText(legend)
  return (
    <ElLabelText {...rest} data-size={size} data-variant={variant}>
      {children}
      {isRequired && ' *'}
    </ElLabelText>
  )
}
