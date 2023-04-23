export enum BadgeType {
  Info = "Info",
  Appended = "Appended",
  FeatureGreen = "FeatureGreen",
  FeatureIndigo = "FeatureIndifo",
  FeatureOrange = "FeatureOrange",
  FeatureRose = "FeatureRose",
}

export interface BadgeProps {
  /**
   * 배지 텍스트
   */
  badgeText: string;
  /**
   * 외부 css class
   */
  className?: string;
  /**
   * 메인 배지 css class
   */
  mainClassName?: string;
  /**
   * 추가 정보 배지 css class
   */
  appendedClassName?: string;
  /**
   * 배지 타입
   */
  badgeType?: BadgeType;
  /**
   * 배지에 상세 설명 추가 여부
   */
  appended?: boolean;
  /**
   * 배지에 상세 설명 텍스트
   */
  appendtext?: string;
}

export const Badge = ({
  badgeText,
  className,
  mainClassName,
  appendedClassName,
  badgeType,
  appended,
  appendtext,
}: BadgeProps) => {
  if (appended) {
    return (
      <div
        className={`flex rounded-md outline outline-1 outline-gray-400 ${className} w-fit h-fit`}
      >
        <div
          className={`text-xs text-center p-0.5 pl-1.5 pr-1.5 rounded-l-md ${
            badgeType
              ? getClassesString(badgeType)
              : getClassesString(BadgeType.Info)
          } ${mainClassName ?? ""} outline-0`}
        >
          {badgeText}
        </div>
        <div
          className={` text-xs text-center p-0.5 pl-1.5 pr-1.5 rounded-r-md ${getClassesString(
            BadgeType.Appended
          )} ${appendedClassName ?? ""} outline-0`}
        >
          {appendtext}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`text-xs text-center p-0.5 pl-1.5 pr-1.5 rounded-md w-fit h-fit ${
          badgeType
            ? getClassesString(badgeType)
            : getClassesString(BadgeType.Info)
        } outline outline-1 outline-gray-400 ${className ?? ""} `}
      >
        {badgeText}
      </div>
    );
  }
};

function getClassesString(type: BadgeType) {
  switch (type) {
    case BadgeType.Info:
      return "text-white bg-gradient-to-r from-gray-600 to-gray-500 shadow-lg shadow-gray-600/10";
    case BadgeType.Appended:
      return "text-white bg-gradient-to-r from-gray-500 to-gray-600 shadow-lg shadow-gray-600/10";
    case BadgeType.FeatureGreen:
      return "text-white bg-gradient-to-r from-green-800 to-green-700 shadow-lg shadow-green-800/10";
    case BadgeType.FeatureIndigo:
      return "text-white bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-lg shadow-indigo-500/10";
    case BadgeType.FeatureOrange:
      return "text-white bg-gradient-to-r from-orange-700 to-orange-600 shadow-lg shadow-orange-700/10";
    case BadgeType.FeatureRose:
      return "text-white bg-gradient-to-r from-rose-700 to-rose-600 shadow-lg shadow-rose-700/10";
  }
}
