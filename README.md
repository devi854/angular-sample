# Angular sample app

Simple Angular 18 task list app for testing deployment on an Ubuntu VM.

## Run on the VM

```bash
npm install
npm run build
npx http-server dist/angular-sample/browser -p 8081 -a 0.0.0.0
```

Open http://<VM_PUBLIC_IP>:8081
