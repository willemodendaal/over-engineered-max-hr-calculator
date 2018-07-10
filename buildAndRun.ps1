$imageName = 'maxhrcalculator/web:8'
$runningContainer = $(docker container ls -q -f name=maxhrcalculator)
if ($runningContainer -ne "")
{
    Write-host "Stopping containers $runningContainer"
    docker rm -f $runningContainer
}
else 
{
    Write-Host "Container not running. $runningContainer, $($runningContainer.Count)"
}
docker build -t $imageName .
docker container run -it -p 8080:80 --name maxhrcalculator  $imageName