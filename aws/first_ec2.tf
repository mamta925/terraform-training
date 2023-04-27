provider "aws" {
  region     = "us-east-1"
  access_key = "XX"
  secret_key = "XX"
}                          

resource "aws_instance" "my_ec2" {
  ami = "ami-02396cdd13e9a1257"
  instance_type = "t2.micro"

  tags = {
    "Name" = "first ec2"
  }
}

provider "azurerm" {
  
}