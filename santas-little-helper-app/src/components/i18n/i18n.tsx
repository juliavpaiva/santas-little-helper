import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { BrasilFlag, EuaFlag } from '../../assets'
import Flag from './flag'

const PT_BR = 'pt-BR'
const EN_US = 'en-US'

const I18n = () => {
  const { i18n } = useTranslation()
  const [language, setLanguage] = React.useState(i18n.language);

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
    i18n.changeLanguage(language)
  };

  const selectedLanguage = i18n.language

  return (
      <FormControl>

        <Select
          value={language}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={PT_BR}>
            <Flag image={BrasilFlag} isSelected={selectedLanguage === PT_BR}/>
          </MenuItem>
          <MenuItem value={EN_US}>
            <Flag image={EuaFlag} isSelected={selectedLanguage === EN_US}/>
          </MenuItem>
        </Select>
      </FormControl>
  );
}

export default I18n