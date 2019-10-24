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
    const HumanResources = 0;
    const MediaCommAndWriting = 1;
    const Business = 2;
    const AdminAndOffice = 3;
    const Management = 4;
    const Healthcare = 5;
    const CustomerService = 6;
    const AccountingAndFinance = 7;
    const ComputerAndIT = 8;
    const AdvertisingAndMarketing = 9;
    const Education = 10;
    const TravelTourism = 11;
    const FoodServices = 12;
    const SalesAndRetail = 13;
    const ScienceAndEngg = 14;
    const Property = 15;
    const Sports = 16;
    const DesignAndUX = 17;
    const Construction = 18;
    const Consultancy = 19;

    public static function getDescription($value): string
    {
        // do not write symbols like &,. etc in return values
        if ($value === self::HumanResources) {
            return 'Human Resources';
        }

        if ($value === self::MediaCommAndWriting) {
            return 'Media Comm and Writing';
        }

        if ($value === self::AdminAndOffice) {
            return 'Admin and Office';
        }

        if ($value === self::CustomerService) {
            return 'Customer Service';
        }

        if ($value === self::AccountingAndFinance) {
            return 'Accounting and Finance';
        }

        if ($value === self::ComputerAndIT) {
            return 'Computer and IT';
        }

        if ($value === self::AdvertisingAndMarketing) {
            return 'Advertising and Marketing';
        }

        if ($value === self::TravelTourism) {
            return 'Travel and Tourism';
        }

        if ($value === self::FoodServices) {
            return 'Food Services';
        }

        if ($value === self::SalesAndRetail) {
            return 'Sales and Retail';
        }

        if ($value === self::ScienceAndEngg) {
            return 'Science and Engg';
        }

        if ($value === self::DesignAndUX) {
            return 'Design and UX';
        }

        return parent::getDescription($value);
    }
}
