<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class JobType extends Enum
{
    const FullTime = 0;
    const PartTime = 1;
    const Freelance = 2;
    const Internship = 3;
    const Contract = 4;


    // public static function getDescription(int $value): string
    // {
    //     switch ($value) {
    //         case self::FullTime:
    //             return 'Full time';
    //             break;
    //         case self::PartTime:
    //             return 'Part time';
    //             break;
    //         default:
    //             return self::getKey($value);
    //     }
    // }
}
