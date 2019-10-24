<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class PackageType extends Enum
{
    const CompanyBasic = 1;
    const CompanyPro = 2;
    const ConsultancyBasic = 3;
    const ConsultancyPro = 4;

    public static function getDescription($value): string
    {
        // do not write symbols like &,. etc in return values
        if ($value === self::CompanyBasic) {
            return 'company-basic';
        }

        if ($value === self::CompanyPro) {
            return 'company-pro';
        }

        if ($value === self::ConsultancyBasic) {
            return 'consultancy-basic';
        }

        if ($value === self::ConsultancyPro) {
            return 'consultancy-pro';
        }

        return parent::getDescription($value);
    }
}
