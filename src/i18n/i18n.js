import React, {h} from 'preact';
import {FormattedMessage} from "react-intl";


export default function internationalization(id) {
    return  (
        <FormattedMessage id={id}>
            {message => { message }}.
        </FormattedMessage>
    )
}