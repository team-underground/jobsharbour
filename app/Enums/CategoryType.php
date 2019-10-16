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
    const SoftwareDeveloper = 0;
    const Finance = 1;
    const Accountant = 2;
    const HumanResourcesManager = 3;
    const OfficeAdmin = 4;
    const MobileAppDeveloper = 5;
    const Healthcare = 6;
    const Marketing = 7;


    public static function getDescription($value): string
    {
        if ($value === self::HumanResourcesManager) {
            return 'HR Manager';
        }

        if ($value === self::SoftwareDeveloper) {
            return 'Software Developer';
        }

        if ($value === self::MobileAppDeveloper) {
            return 'Mobile App Developer';
        }

        if ($value === self::OfficeAdmin) {
            return 'Office Admin';
        }

        return parent::getDescription($value);
    }
}
