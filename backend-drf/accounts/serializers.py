from django.contrib.auth.models import User
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, min_length=8, style={'input_type':"password"})
    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            validated_data['username'],
            validated_data['email'],
            validated_data['password']
        )
      
        #User.object.create : it will store the password in plain text
        # User.objects.create_user : it will store the password in hashed format
        # user = User.objects.create_user(**validated_data)  #here we can use **validated_data because this case it contain only specific datas.
        return user
