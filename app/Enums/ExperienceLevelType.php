<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class ExperienceLevelType extends Enum
{
    const NotApplicable = 0;
    const EntryLevel = 1;
    const InermediateOrExperiencedLevel = 2;
    const MidSeniorLevel = 3;
    const Director = 4;
    const Executive = 5;
    const ZeroToThree = 6;
    const ThreeToFive = 7;
    const FiveToTen = 8;
    const TenToFifteen = 9;
    const FifteenPlus = 10;



    public static function getDescription($value): string
    {
        // do not write symbols like &,. etc in return values
        if ($value === self::NotApplicable) {
            return 'Not Applicable';
        }

        if ($value === self::EntryLevel) {
            return 'Entry Level';
        }

        if ($value === self::InermediateOrExperiencedLevel) {
            return 'Inermediate or Experienced Level';
        }

        if ($value === self::MidSeniorLevel) {
            return 'Mid Senior Level';
        }

        if ($value === self::ZeroToThree) {
            return '0 to 3 years';
        }

        if ($value === self::ThreeToFive) {
            return '3 to 5 years';
        }

        if ($value === self::FiveToTen) {
            return '5 to 10 years';
        }

        if ($value === self::TenToFifteen) {
            return '10 to 15 years';
        }

        if ($value === self::FifteenPlus) {
            return '15 years plus';
        }

        return parent::getDescription($value);
    }
}
