<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class CategoryType extends Enum
{
    const WebDeveloper = 0;
    const Finance = 1;
    const Accountant = 2;
    const HumanResourcesManager = 3;
    const FrontendDeveloper = 4;
    const BackendDeveloper = 5;

    // public static function getDescription(int $value): string
    // {
    //     switch ($value) {
    //         case self::HumanResourcesManager:
    //             return 'HR Manager';
    //             break;
    //         default:
    //             return self::getKey($value);
    //     }
    // }
}
