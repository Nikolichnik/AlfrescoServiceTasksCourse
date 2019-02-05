This is a early access version of Alfresco/Activiti SDK

# Notes

You need to add your activiti.lic file to ~/activiti-enterprise/ to run with a license. Not doing so will result on 
runing activiti in read-only mode.

## Project Structure

This project runs Alfresco, Share, Solr and the Activiti applications (activiti-app and activiti-admin)

The activiti-extension-module allows for Activiti extensions to be included as a jar file that get's deployed together 
with the activiti-app.

##Key Configuration Properties
The activiti configuration files are located on the runner module under tomcat/activiti.

There are 2 properties files, one for each activiti application.

- activiti-admin.properties (properties file for the activiti-admin web application)
- activiti-app.properties ( properties file for the activiti-app web application)

```

```

*You can find all of the properties by rounding up the calls to*
```
   env.getProperty(<key>, <default value>);
```


