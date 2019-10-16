<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

/**
 * @method static static OptionOne()
 * @method static static OptionTwo()
 * @method static static OptionThree()
 */
final class UserType extends Enum
{
    const Administrator = 0;
    const Employer = 1;
    const Consultancy = 2;
    const User = 3;
}
