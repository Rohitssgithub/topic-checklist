import React, { memo } from 'react'
import Input from './input/Input'
import Password from './password/Password'
import Select from './select/Select'
import Textarea from './textarea/Textarea'
import Date from './date/Date'

const FormikControl = (props) => {

    const { control, ...rest } = props
    
    switch (control) {
        case 'input': return <Input {...rest} />
        case 'password': return <Password {...rest} />
        case 'select': return <Select {...rest} />
        case 'textarea': return <Textarea {...rest} />
        // case 'date': return <Date {...rest} />
        default: return null
    }
}

export default memo(FormikControl)
