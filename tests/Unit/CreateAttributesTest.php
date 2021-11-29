<?php

namespace Tests\Unit;

use App\Models\Attribute;
use PHPUnit\Framework\TestCase;

class CreateAttributesTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_create_attributes()
    {
        $attr = App\Models\Attribute::create([
          "ru" => [
            "name" => 'Руль'
          ],
          "en" => [
            "name" => 'Rul'
          ]
        ]);

        $attr->save();

        $testAttr = Attribute::first();

        $this->assertTrue($testAttr->name === $attr->name);
    }
}
