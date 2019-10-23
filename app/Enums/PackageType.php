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
}
