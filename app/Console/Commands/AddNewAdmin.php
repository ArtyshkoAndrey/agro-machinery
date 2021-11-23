<?php

namespace App\Console\Commands;

use Hash;
use App\Models\User;
use Illuminate\Console\Command;
use Symfony\Component\Console\Command\Command as CommandAlias;

class AddNewAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'admin:create {--name= : User name} {--email= : User email} {--password= : User password}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'This command create new admin user';

  /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(): int
    {
      $email = $this->option('email');
      $password = $this->option('password');
      $name = $this->option('name');

      if (!isset($email, $password, $name) || (new User)->where('email', $email)->count() > 0) {
        $this->line("<error>Error data, invalid</error>");
        return CommandAlias::FAILURE;
      }

      $user = (new User)->create([
        'name' => $name,
        'password' => Hash::make($password),
        'email' => $email,
      ]);

      $this->line('Created admin:');
      $this->line("\tAdmin id: <info>$user->id</info>");
      $this->line("\tAdmin name: <info>$name</info>");
      $this->line("\tAdmin password: <info>$password</info>");
      $this->line("\tAdmin email: <info>$email</info>");

      return CommandAlias::SUCCESS;
    }
}
