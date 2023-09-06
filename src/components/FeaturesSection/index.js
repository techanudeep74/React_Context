import Playtime from '../Playtime'
import NewWaysToConnect from '../NewWaysToConnect'
import LanguageContext from '../../context/LanguageContext'

import './index.css'

const FeaturesSection = () => (
  <LanguageContext.Consumer>
    {value => {
      const {activeLanguage} = value
      return (
        <div className="features-section-container">
          <Playtime />
          <NewWaysToConnect activeLanguage={activeLanguage} />
        </div>
      )
    }}
  </LanguageContext.Consumer>
)

export default FeaturesSection
