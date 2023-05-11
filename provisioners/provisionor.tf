provider "aws" {
  region     = "us-east-1"
  access_key = ""
  secret_key = ""
}                          

resource "aws_instance" "my_ec2" {
  ami = "ami-02396cdd13e9a1257"
  instance_type = "t2.micro"
   key_name = "terraform"
  connection {
   type     = "ssh"
   user     = "ec2-user"
   private_key = file("./terraform-key.pem")
   host     = self.public_ip
    }

 provisioner "remote-exec" {
   inline = [
     "sudo amazon-linux-extras install -y nginx1",
     "sudo systemctl start nginx"
   ]
 }
}
