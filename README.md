# Capacitor with File Opener

This is a a sample Capacitor application using the `cordova-plugin-fileopener2` plugin.

Note: It also removes the permission of `READ_EXTERNAL_STORAGE` permission that is introduced by this plugin by adding the following to `androidmanifest.xml`:

```xml
<manifest xmlns:tools="http://schemas.android.com/tools" ...
```

Followed by this line:

```xml
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" tools:node="remove" />
```