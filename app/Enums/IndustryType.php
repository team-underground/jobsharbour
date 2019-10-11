<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class IndustryType extends Enum
{
    const InformationTechnology = 0;
    const Telecommunications = 1;
    const Agriculture = 2;
    const Construction = 3;
    const Education = 4;
    const Healthcare = 5;
    const NewsMedia = 6;
}
