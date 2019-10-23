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

        return parent::getDescription($value);
    }
}
