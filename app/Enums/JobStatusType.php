<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class JobStatusType extends Enum
{
    const Draft = 0;
    const Moderation = 1;
    const Published = 2;
}
