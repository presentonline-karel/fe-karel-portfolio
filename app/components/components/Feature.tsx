// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Utils
import { renderIcon } from "@/utils/render-icon";

// Types
import { FeatureProps } from "@/types/organisms/Feature";



export default function Feature(feature: FeatureProps) {
  return (
    <div className="p-6 bg-neutrals-1200 border-[0.4px] border-neutrals-1100 lg:py-8" >
      <div className="flex items-center gap-4 mb-5 lg:flex-col lg:gap-6 lg:items-start lg:mb-4">

        {/* Icon */}
        <div className="w-[52px] h-[52px] flex justify-center items-center bg-prim-200 lg:w-16 lg:h-16">
          <FontAwesomeIcon icon={renderIcon(feature.icon)} className="text-20 leading-5 w-5 h-5 text-neutrals-1300 lg:text-24 lg:leading-6 lg:w-6 lg:h-6" />
        </div>

        <h4 className="h h4 text-neutrals-100 lg:text-32 lg:leading-38px">
          {feature.title}
        </h4>
      </div>

      <p className="p text-neutrals-200">
        {feature.paragraph}
      </p>
    </div>
  )
}