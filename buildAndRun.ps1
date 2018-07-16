$imageName = 'maxhrcalculator/web:9'
$ErrorActionPreference = "Stop"
$runningContainer = $(docker container ls -aq -f name=maxhrcalculator)
if ($runningContainer -ne "")
{
    Write-host "Stopping container: '$runningContainer'"
    docker rm -f $runningContainer
}
else 
{
    Write-Host "Container not running. $runningContainer, $($runningContainer.Count)"
}
docker build -t $imageName .
docker container run -it -p 8080:80 --name maxhrcalculator  $imageName